import img from '../../assets/WelcomeImg.webp';

export default function Welcome() {
  return (
    <div className="lg:col-span-2 relative lg:block bg-white dark:bg-gray-900">
      <img src={img} alt="test" className="object-cover h-full object-center" />
      <h2 className="absolute text-nowrap top-1/2 left-1/2 transform -translate-x-1/2 text-xl lg:text-3xl tracking-wider text-slate-100 dark:text-slate-300 bg-black/90 px-4 py-2 rounded">
        Select a Chat to Start Messaging
      </h2>
    </div>
  );
}
