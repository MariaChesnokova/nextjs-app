import NewsList from '@/components/common/newsList/NewsList'; 


export default function Technology() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-10 bg-gradient-to-br from-blue-400 to-teal-500`}
    >
       <NewsList section = "technology" />
    </main>
  );
}
