const MenuList = [
  { title: 'How it work' },
  { title: 'Features' },
  { title: 'Template' },
];

export function Menu() {
  return (
    <ul className="flex items-center gap-6">
      {MenuList.map((el, i) => (
        <li
          key={i}
          className="text-lg  duration-150 cursor-pointer hover:border-t hover:border-secondary rounded-xl px-4 py-2"
        >
          {el.title}
        </li>
      ))}
    </ul>
  );
}
