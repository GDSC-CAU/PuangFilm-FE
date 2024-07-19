export default function Home() {
  console.log('dfs');
  return (
    <div>
      기본 글꼴은 cafe24
      <div className="font-sfpro">이 글꼴은 sfpro</div>
      <div className="font-sfpro text-2xl font-bold">sfpro 글꼴 weight</div>
      <div className="text-blue-700">글꼴 색</div>
    </div>
  );
}
