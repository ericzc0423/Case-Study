Error MSG: Reboot rejecting I/O to offline device

There is the error MSG "Reboot rejecting I/O to offline device" during we reboot the server.

Root Cause:
Hardware offline, e.g: Disk Error, NIC Error, RAM Error

Solution:
Power off the VM and Power on.
for Disk, run fsck to test and check the disks.
```bash
fsck
```