"use client";
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function ResetSuccess() {
  const router = useRouter();

  return (
     <div className="relative min-h-screen w-full bg-[#FBFAFF] overflow-hidden p-6">
   
       {/* Logo Section at top-left */}
       <div className="absolute top-6 left-6 flex gap-2">
         <Image src="/logo.svg" alt="Darads Logo" width={40} height={40} />
         <Image src="/logo-name.svg" alt="Darads Logo" width={152} height={40} />
       </div>

       <div className="flex items-center justify-center min-h-screen ">
       <div className="bg-white rounded-xl shadow-md p-10 w-full max-w-[450px] min-h-[450px]  items-center justify-center">

        <h2 className="text-[24px] font-semibold text-center text-[#27252B] mt-40">Verification Successful</h2>
        <p className="text-[14px] text-center text-[#121212CC] mb-6">One last step! Add your bank details to start receiving payments.</p>

        <div className="flex items-center justify-center">
  <button
    onClick={() => router.push('/login')}
    className="w-[205px] py-3 bg-[#5F04F6] text-white font-medium rounded-lg hover:bg-[#4b03c4] transition duration-300"
  >
    Go To Login
  </button>
</div>

      </div>
      </div>
    </div>
  );
}
