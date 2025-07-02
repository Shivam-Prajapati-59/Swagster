import { IoManager } from "./managers/IoManager";

const io = IoManager.getIo();
io.listen(3000);
