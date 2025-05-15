
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ShoppingCart, X, Plus, Minus, ArrowRight, Truck, ShoppingBag } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "Kangkung Organik",
      price: 8000,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      unit: "ikat"
    },
    {
      id: "2",
      name: "Bayam Segar",
      price: 6500,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      unit: "ikat"
    },
    {
      id: "3",
      name: "Tomat Merah",
      price: 12000,
      quantity: 3,
      image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
      unit: "kg"
    }
  ]);
  
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  
  const updateQuantity = (id: string, amount: number) => {
    setCartItems(
      cartItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.quantity + amount;
          if (newQuantity <= 0) {
            return null; // Remove item
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      }).filter(Boolean) as CartItem[]
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item dihapus",
      description: "Item telah dihapus dari keranjang"
    });
  };
  
  const applyPromoCode = () => {
    if (promoCode.toLowerCase() === "sayur10") {
      setDiscountApplied(true);
      toast({
        title: "Promo berhasil",
        description: "Diskon 10% berhasil diterapkan"
      });
    } else {
      toast({
        title: "Kode promo tidak valid",
        description: "Silakan coba kode promo yang lain",
        variant: "destructive"
      });
    }
  };
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shippingCost = 15000;
  const discount = discountApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shippingCost - discount;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left section - Cart items */}
          <div className="w-full md:w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl md:text-3xl font-bold flex items-center gap-2">
                <ShoppingCart className="h-6 w-6" />
                Keranjang Belanja
              </h1>
              <span className="text-sm text-gray-500">
                {cartItems.length} item
              </span>
            </div>
            
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="flex justify-center mb-4">
                  <ShoppingBag className="h-16 w-16 text-gray-300" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Keranjang Anda kosong</h2>
                <p className="text-gray-600 mb-6">Tambahkan beberapa produk sayuran segar ke keranjang Anda</p>
                <Link to="/produk">
                  <Button className="bg-sayur-green hover:bg-sayur-green-dark">
                    Belanja Sekarang
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-4 flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-gray-500 text-sm">Rp {item.price.toLocaleString('id-ID')} / {item.unit}</p>
                    </div>
                    <div className="flex items-center">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="mx-3 min-w-[2rem] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <div className="ml-6 font-medium min-w-[100px] text-right">
                      Rp {(item.price * item.quantity).toLocaleString('id-ID')}
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="ml-4 p-1 text-gray-400 hover:text-red-500"
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </div>
                ))}
                
                <div className="bg-white rounded-lg shadow-md p-4">
                  <h3 className="font-medium mb-2">Kode Promo</h3>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Masukkan kode promo"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      disabled={discountApplied}
                    />
                    <Button
                      onClick={applyPromoCode}
                      variant="outline"
                      className="whitespace-nowrap"
                      disabled={discountApplied}
                    >
                      Terapkan
                    </Button>
                  </div>
                  {discountApplied && (
                    <p className="text-sm text-sayur-green mt-2">Kode promo berhasil diterapkan (Diskon 10%)</p>
                  )}
                </div>
              </div>
            )}
          </div>
          
          {/* Right section - Order summary */}
          <div className="w-full md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold mb-4">Ringkasan Pesanan</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>Rp {subtotal.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pengiriman</span>
                  <span>Rp {shippingCost.toLocaleString('id-ID')}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-sayur-green">
                    <span>Diskon (10%)</span>
                    <span>- Rp {discount.toLocaleString('id-ID')}</span>
                  </div>
                )}
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span className="text-lg">Rp {total.toLocaleString('id-ID')}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Termasuk pajak</p>
                </div>
              </div>
              
              <Button
                disabled={cartItems.length === 0}
                className="w-full bg-sayur-green hover:bg-sayur-green-dark flex items-center justify-center gap-2"
              >
                Lanjut ke Pembayaran
                <ArrowRight className="h-4 w-4" />
              </Button>
              
              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="h-5 w-5 text-sayur-blue" />
                  <span>Pengiriman gratis untuk pembelian di atas Rp 150.000</span>
                </div>
                <p className="text-xs text-gray-500">
                  Estimasi pengiriman 1-2 hari setelah pembayaran berhasil diverifikasi
                </p>
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <Link 
                to="/produk"
                className="text-sayur-blue hover:underline text-sm flex items-center justify-center gap-1"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                Lanjutkan Belanja
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
