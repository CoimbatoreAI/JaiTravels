import React from 'react';

export const BankCards = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Indian Bank Card */}
        <div className="flex flex-col h-full">
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-blue-600 p-6 sm:p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-12 bg-blue-50 rounded-lg flex items-center justify-center p-2 shrink-0">
                <img src="/ib.png" alt="Indian Bank" className="w-full h-full object-contain" />
              </div>
              <div className="text-[22px] font-bold text-gray-900">Indian Bank</div>
            </div>
            
            <hr className="border-gray-100 mb-6" />
            
            {/* Details Table */}
            <div className="flex flex-col gap-5 text-[15px] text-gray-700 flex-1">
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Account Name:</span>
                <span>JAI TRAVEL WORLD</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Bank Name:</span>
                <span>Indian Bank</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Account No:</span>
                <span className="text-blue-600 font-bold text-xl tracking-wide">6483756767</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Account Type:</span>
                <span>Current Account</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">IFSC Code:</span>
                <span className="tracking-wide">IDIB000K039</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Payable at:</span>
                <span>Kodaikanal</span>
              </div>
            </div>
          </div>
        </div>

        {/* ICICI Bank Card */}
        <div className="flex flex-col h-full">
          <div className="bg-white rounded-xl shadow-lg border-t-4 border-orange-500 p-6 sm:p-8 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
            
            {/* Header */}
            <div className="flex items-center gap-4 mb-5">
              <div className="w-16 h-12 bg-orange-50 rounded-lg flex items-center justify-center p-2 shrink-0">
                <img src="/icici-bank.png" alt="ICICI Bank" className="w-full h-full object-contain" />
              </div>
              <div className="text-[22px] font-bold text-gray-900">ICICI Bank</div>
            </div>
            
            <hr className="border-gray-100 mb-6" />
            
            {/* Details Table */}
            <div className="flex flex-col gap-5 text-[15px] text-gray-700 flex-1">
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Account Name:</span>
                <span>P.Jai</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Bank Name:</span>
                <span>ICICI Bank</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Account No:</span>
                <span className="text-orange-600 font-bold text-xl tracking-wide">080301503896</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Account Type:</span>
                <span>Savings Account</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">IFSC Code:</span>
                <span className="tracking-wide">ICIC0000803</span>
              </div>
              <div className="flex sm:items-center flex-col sm:flex-row gap-1 sm:gap-4">
                <span className="font-bold text-gray-900 w-36 shrink-0">Payable at:</span>
                <span>Kodaikanal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact info below both cards */}
      <div className="bg-slate-100 rounded-2xl p-6 sm:p-8 text-center max-w-2xl mx-auto shadow-sm border border-slate-200">
        <h4 className="text-xl font-black text-royal-900 mb-2">Digital Payments</h4>
        <div className="flex items-center justify-center gap-3 text-lg font-bold text-slate-800 mb-4">
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-lg border border-green-200">GPay / PhonePe</span>
          <span className="text-2xl font-black tracking-wide text-blue-700">9994607460</span>
        </div>
        <p className="text-sm text-slate-600 font-medium italic">
          "For further details please feel free to call anytime"
        </p>
      </div>
    </div>
  );
};
