### HOW TO USE ###

#1. Run create_user.sh with desired directory name as variable
	./create_user.sh <example>

#2. Make sure data directory in /users/example contains a directory called archive containing directories of .dat files
	--- if you run tree it should look like this
	tree /OSW/users/example/data/archive -L 1
	├── META-INF
	├── oswarp
	├── oswcpuinfo
	├── oswifconfig
	├── oswiostat
	├── oswmeminfo
	├── oswmpstat
	├── oswnetstat
	├── oswnfsiostat
	├── oswpidstat
	├── oswpidstatd
	├── oswprvtnet
	├── oswps
	├── oswslabinfo
	├── oswtop
	├── oswvmstat
	└── oswxentop
	---

#3. Run runOSW.sh
	./runOSW.sh

#4 ---TO UPDATE oswbba.jar---
	Find in MOS > OSWatcher (Doc ID 301137.1) (https://mosemp.us.oracle.com/epmos/faces/DocContentDisplay?id=301137.1)
	Find > Click here to download the latest version OSWatcher analyzer
	Rename downloaded jar to oswbba.jar and replace current oswbba.jar (in .OSW) with it
	