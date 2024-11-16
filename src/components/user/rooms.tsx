const rooms: string[] = [
  "WCH 127",
  "WCH 203",
  "Bytes",
  "Bourns A265",
  "Bourns A171",
];

const Rooms = (): React.ReactNode => {
  return (
    <div className="mb-3 mt-3 rounded-lg bg-cutie-violet p-3 font-bold shadow-xl">
      <div className="p-2" data-cy="rooms-title">
        🚪Hackrooms
      </div>
      {rooms.map((room: string, index: number) => (
        <div
          key={index}
          className="n-text mb-3 mr-3 inline-block rounded-lg bg-cutie-purple-100 p-2 text-white shadow"
        >
          {room}
        </div>
      ))}
    </div>
  );
};

export default Rooms;
