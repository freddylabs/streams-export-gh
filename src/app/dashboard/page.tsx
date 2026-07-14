"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth, Order } from "@/context/AuthContext";
import { Package, CreditCard, Receipt, LogOut } from "lucide-react";

export default function DashboardPage() {
  const { user, addOrder, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/");
      return;
    }

    // Process pending order from localStorage
    const pendingOrderStr = localStorage.getItem("streams_pending_order");
    if (pendingOrderStr) {
      const pendingData = JSON.parse(pendingOrderStr);
      
      const newOrder: Order = {
        id: "ORD-" + Math.floor(100000 + Math.random() * 900000),
        product: pendingData.product === "other" ? pendingData.customItem : pendingData.product,
        weight: pendingData.weight,
        destinationState: pendingData.state,
        totalAmount: pendingData.quote.amount,
        amountPaid: 0,
        status: "pending_payment"
      };

      addOrder(newOrder);
      localStorage.removeItem("streams_pending_order");
    }
  }, [user, router, addOrder]);

  if (!user) return null;

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 bg-brand-bg">
      <div className="container mx-auto max-w-5xl">
        <div className="flex justify-between items-center mb-10 border-b border-gray-200 pb-6">
          <div>
            <h1 className="text-3xl font-poppins font-bold text-brand-brown">Welcome, {user.name}</h1>
            <p className="text-gray-500 font-inter mt-1">Manage your imports and payments</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center space-x-2 text-red-500 hover:text-red-700 transition-colors bg-red-50 px-4 py-2 rounded-lg font-medium"
          >
            <LogOut className="w-4 h-4" />
            <span>Logout</span>
          </button>
        </div>

        <div className="space-y-6">
          <h2 className="text-xl font-poppins font-semibold text-brand-brown mb-4 flex items-center">
            <Package className="w-5 h-5 mr-2 text-brand-gold" /> Your Orders
          </h2>
          
          {user.orders.length === 0 ? (
            <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100">
              <p className="text-gray-500 mb-4">You have no active orders.</p>
              <button 
                onClick={() => router.push("/quote")}
                className="bg-brand-gold text-brand-brown px-6 py-2 rounded-full font-semibold hover:bg-brand-orange hover:text-white transition-colors"
              >
                Get a New Quote
              </button>
            </div>
          ) : (
            <div className="grid gap-6">
              {user.orders.map((order) => {
                const depositRequired = order.totalAmount > 0 ? order.totalAmount * 0.7 : 0;

                return (
                  <div key={order.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="border-b border-gray-100 p-6 flex flex-col md:flex-row md:items-center justify-between bg-gray-50/50">
                      <div>
                        <div className="text-sm text-gray-500 font-medium mb-1">Order #{order.id}</div>
                        <h3 className="text-lg font-poppins font-bold text-brand-brown uppercase">{order.product}</h3>
                        <div className="text-sm text-gray-500 mt-1">
                          {order.weight}kg • Destination: {order.destinationState}
                        </div>
                      </div>
                      <div className="mt-4 md:mt-0 text-left md:text-right">
                        <div className="text-sm text-gray-500 mb-1">Total Quote</div>
                        <div className="text-2xl font-bold text-brand-brown">
                          {order.totalAmount > 0 ? `$${order.totalAmount.toFixed(2)}` : "Manual Review"}
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      {order.status === "pending_payment" && order.totalAmount > 0 && (
                        <div className="bg-brand-gold/10 border border-brand-gold/20 rounded-xl p-5 flex flex-col md:flex-row items-center justify-between">
                          <div className="mb-4 md:mb-0">
                            <h4 className="font-semibold text-brand-brown flex items-center">
                              <CreditCard className="w-4 h-4 mr-2" />
                              Action Required: 70% Deposit
                            </h4>
                            <p className="text-sm text-brand-brown/70 mt-1">
                              Please pay the 70% deposit to begin processing your shipment.
                            </p>
                          </div>
                          <button
                            onClick={() => router.push(`/payment?orderId=${order.id}&amount=${depositRequired.toFixed(2)}`)}
                            className="w-full md:w-auto btn-shimmer bg-brand-gold text-brand-brown font-semibold px-8 py-3 rounded-xl hover:bg-brand-orange hover:text-white transition-colors"
                          >
                            Pay Deposit (${depositRequired.toFixed(2)})
                          </button>
                        </div>
                      )}

                      {order.status === "pending_payment" && order.totalAmount === 0 && (
                        <div className="bg-blue-50 border border-blue-100 rounded-xl p-5">
                          <h4 className="font-semibold text-blue-800">Under Review</h4>
                          <p className="text-sm text-blue-600 mt-1">
                            Our logistics team is reviewing your custom request. We will update your quote shortly.
                          </p>
                        </div>
                      )}

                      {order.status === "processing" && (
                        <div className="bg-green-50 border border-green-100 rounded-xl p-5 flex flex-col md:flex-row justify-between items-center">
                          <div>
                            <h4 className="font-semibold text-green-800 flex items-center">
                              <Receipt className="w-4 h-4 mr-2" />
                              Payment Received
                            </h4>
                            <p className="text-sm text-green-700 mt-1">
                              We have received your deposit of ${order.amountPaid.toFixed(2)}. Your order is now processing.
                            </p>
                            <p className="text-xs text-green-600 mt-1 font-medium">Remaining 30% balance is due upon arrival.</p>
                          </div>
                          <div className="mt-4 md:mt-0 text-green-800 font-bold bg-green-200/50 px-4 py-2 rounded-lg">
                            Status: Processing
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
