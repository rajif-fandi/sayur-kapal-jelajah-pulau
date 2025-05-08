
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlanProps {
  name: string;
  price: number;
  description: string;
  features: string[];
  recommended?: boolean;
}

const plans: PlanProps[] = [
  {
    name: 'Paket Mingguan',
    price: 149000,
    description: 'Sayuran segar setiap minggu untuk keluarga kecil',
    features: [
      'Pengiriman setiap Senin',
      '5 jenis sayuran (1kg total)',
      'Buah lokal musiman (500g)',
      'Newsletter resep mingguan',
      'Gratis ongkir'
    ]
  },
  {
    name: 'Paket Keluarga',
    price: 249000,
    description: 'Sayuran segar setiap minggu untuk keluarga besar',
    features: [
      'Pengiriman dua kali seminggu',
      '8 jenis sayuran (2kg total)',
      'Buah lokal musiman (1kg)',
      'Newsletter resep mingguan',
      'Gratis ongkir',
      'Prioritas pengiriman'
    ],
    recommended: true
  },
  {
    name: 'Paket Bisnis',
    price: 499000,
    description: 'Untuk kebutuhan restaurant dan katering',
    features: [
      'Pengiriman tiga kali seminggu',
      '10 jenis sayuran (5kg total)',
      'Buah lokal musiman (2kg)',
      'Konsultasi dengan chef',
      'Gratis ongkir',
      'Penukaran sayuran sesuai stok'
    ]
  }
];

const SubscriptionSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Berlangganan Sayur Pulau</h2>
        <p className="text-gray-600 text-lg">
          Nikmati pengiriman rutin sayuran segar langsung dari petani pulau ke rumah Anda. 
          Pilih paket yang sesuai kebutuhan Anda.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={cn(
              "bg-white rounded-xl overflow-hidden",
              plan.recommended 
                ? "border-2 border-sayur-green shadow-lg shadow-sayur-green/10 relative" 
                : "border border-gray-200 shadow-md"
            )}
          >
            {plan.recommended && (
              <div className="absolute top-0 right-0 bg-sayur-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                PALING POPULER
              </div>
            )}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">
                  {plan.price.toLocaleString('id-ID')}
                </span>
                <span className="text-gray-600"> / bulan</span>
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-sayur-green mr-2 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={cn(
                  "w-full",
                  plan.recommended 
                    ? "bg-sayur-green hover:bg-sayur-green-dark" 
                    : "bg-white border-2 border-sayur-green text-sayur-green hover:bg-sayur-green hover:text-white"
                )}
              >
                Berlangganan Sekarang
              </Button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12 text-gray-600 max-w-2xl mx-auto">
        <p className="text-sm">
          Semua langganan dapat dibatalkan kapan saja. Untuk memastikan kesegaran sayuran, 
          pengiriman dilakukan pada pagi hari menggunakan kurir khusus dengan box pendingin.
        </p>
      </div>
    </div>
  );
};

export default SubscriptionSection;
