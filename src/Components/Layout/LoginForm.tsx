import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaDiscord } from 'react-icons/fa';

export function SignUpMethod({
  method,
  link,
}: {
  method: 'google' | 'github' | 'discord';
  link: string;
}) {
  const style = 'text-3xl';
  const Icon =
    method === 'google' ? (
      <FcGoogle className={style} />
    ) : method === 'github' ? (
      <FaGithub className={style} />
    ) : (
      <FaDiscord className={style} />
    );
  return (
    <a
      href={link}
      className=" flex items-center bg-background justify-center px-6 py-3 rounded-xl gap-4"
    >
      {Icon} <h3 className="capitalize text-xl">{method}</h3>
    </a>
  );
}
