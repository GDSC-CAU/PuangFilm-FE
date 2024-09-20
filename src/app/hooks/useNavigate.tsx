import { useRouter } from 'next/navigation';

export function useNavigate() {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };

  return { navigateTo };
}
