
import React from 'react';
import FadeInSection from './FadeInSection';
import { CargoIcon, LogisticsIcon, WarehouseIcon } from './icons';

interface Service {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const servicesList: Service[] = [
    {
        icon: <CargoIcon className="w-16 h-16 text-blue-400 mb-4" />,
        title: 'TRANSPORTE DE CARGA',
        description: 'Ofrecemos un servicio de transporte de carga terrestre a nivel nacional, garantizando la seguridad y entrega a tiempo de su mercancía.'
    },
    {
        icon: <LogisticsIcon className="w-16 h-16 text-blue-400 mb-4" />,
        title: 'LOGÍSTICA Y DISTRIBUCIÓN',
        description: 'Gestionamos la cadena de suministro de forma integral, desde la planificación hasta la entrega final, optimizando rutas y tiempos.'
    },
    {
        icon: <WarehouseIcon className="w-16 h-16 text-blue-400 mb-4" />,
        title: 'ALMACENAJE',
        description: 'Contamos con bodegas seguras y equipadas para el almacenamiento de sus productos, con control de inventario y gestión de stocks.'
    }
];

const ServiceCard: React.FC<Service> = ({ icon, title, description }) => (
    <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:-translate-y-2">
        {icon}
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

const Services = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <section ref={ref} id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <FadeInSection>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-400">Nuestros Servicios</h2>
                        <p className="text-gray-400 mt-2">Soluciones logísticas a la medida de sus necesidades.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {servicesList.map((service, index) => (
                            <ServiceCard key={index} {...service} />
                        ))}
                    </div>
                </FadeInSection>
            </div>
        </section>
    );
});

export default Services;
