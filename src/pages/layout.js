import MainNav from "@/components/mainnav.component";

 const MainLayout = ({ children }) => {
   return (
    <main className="flex min-h-screen flex-col items-center p-8 gray-50 dark:bg-gray-900 h-full min-h-full">
      <MainNav />
      {children}
    </main>
   )
 }

export default MainLayout;
