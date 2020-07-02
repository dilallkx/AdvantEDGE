/*
 * Copyright (c) 2020  InterDigital Communications, Inc
 *
 * Licensed under the Apache License, Version 2.0 (the \"License\");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an \"AS IS\" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Demo iperf transit App API
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * API version: 0.0.1
 * Generated by: Swagger Codegen (https://github.com/swagger-api/swagger-codegen.git)
 */

package server

import (
	"encoding/json"
	"log"
	"net"
	"net/http"
	"os/exec"
	"strconv"
	"strings"
)

type IperfInfoBasic struct {
	name    string
	portApp string
}

var iperfRunningJobs map[IperfInfoBasic]int

func Init() {
	iperfRunningJobs = make(map[IperfInfoBasic]int)
}

func GetOutboundIP() net.IP {
	conn, err := net.Dial("udp", "8.8.8.8:80")
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	localAddr := conn.LocalAddr().(*net.UDPAddr)

	return localAddr.IP
}

func cmdExec(cli string) (int, error) {
	parts := strings.Fields(cli)
	head := parts[0]
	parts = parts[1:]

	cmd := exec.Command(head, parts...)
	err := cmd.Start()
	if err != nil {
		return 0, err
	}

	pid := cmd.Process.Pid
	go func() {
		err = cmd.Wait()
		/*		if err == nil {
					log.Printf("process terminated normally for pid %d", pid)
				} else {
					log.Printf("iperf terminated abnormally for pid %d: %s", pid, err)
				}
		*/
	}()

	return pid, nil
}

func deletePidProcess(pid int) {

	str := "kill -9 " + strconv.Itoa(pid)
	_, _ = cmdExec(str)
}

func HandleIperfInfo(w http.ResponseWriter, r *http.Request) {

	iperfInfo := new(IperfInfo)

	decoder := json.NewDecoder(r.Body)
	err := decoder.Decode(&iperfInfo)

	if err != nil {
		log.Println(err.Error())
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	targetIp := GetOutboundIP()
	// debug printout
	/*      log.Printf("%s - %s - %s -%s\n",
	                iperfInfo.Name,
	                iperfInfo.App,
	                iperfInfo.Throughput,
			targetIp)
	*/
	var iperfInfoBasic IperfInfoBasic
	iperfInfoBasic.name = iperfInfo.Name
	iperfInfoBasic.portApp = iperfInfo.App

	pidExists := iperfRunningJobs[iperfInfoBasic]

	if pidExists != 0 {
		deletePidProcess(pidExists)
	}

	if iperfInfo.Throughput != "0" && iperfInfo.Throughput != "" {
		str := "iperf -u -c " + targetIp.String() + " -t 3600 -p " + iperfInfo.App + " -b " + iperfInfo.Throughput + "M"

		pid, err := cmdExec(str)
		if err != nil {
			log.Printf("ERROR: %s", err)
		}

		iperfRunningJobs[iperfInfoBasic] = pid
	}
	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
}
