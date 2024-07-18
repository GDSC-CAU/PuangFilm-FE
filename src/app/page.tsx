import Image from "next/image";

export default function Home() {
  return (
    <div>
      기본 글꼴은 cafe24 
      <div className=" font-sfpro">
      이 글꼴은 sfpro
      </div>
      <div className="font-sfpro font-bold">
        sfpro 글꼴 weight
      </div>
      <div className="text-blue-700">
        글꼴 색
      </div>
      
    </div>
  );
}
