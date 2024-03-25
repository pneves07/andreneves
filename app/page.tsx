
import {Avatar} from "@nextui-org/react";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24" 
      style={{
        backgroundImage: "https://cdn.pixabay.com/photo/2015/12/01/15/43/black-1072366_960_720.jpg"
      }}
    >
      <div className="flex gap-3 items-center">
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" className="w-45 h-45 text-large"/>
    </div>
    </main>
  );
}
