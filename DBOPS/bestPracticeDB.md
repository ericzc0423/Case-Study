## 1.Don't setup DB auto-start when server reboot

Reason:
``Most DB servers are running on Shared File System, e.g NFS, iSCSI, VCS. The FileSystems should have downtime. Sometimes, the VMs hangs by the shared FileSystem and we have to cold reboot the VM.
The DB won't startup untill the Shared FileSystem are mounted.
``
**Hence, We highly recomment not to setup DB auto start.**