interface ListWithDataProps {
  list: { date: string; index: number }[];
}

export default function ImageList({ list: [] }): JSX.Element {
  return (
    <div>
      <p className="text-center font-sfpro text-sm text-white">
        편집할 사진을 선택해서 <br />
        이미지 프레임을 선택해 주세요!
      </p>

      <div className="h-64 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          {list.map((date: string, index: number) => (
            <div key={date} className="rounded-md bg-gray-100 p-4 shadow-md" />
          ))}
        </div>
      </div>
    </div>
  );
}
