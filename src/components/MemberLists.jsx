import MemberCard from './MemberCard';

const MembersList = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-6">Kayıtlı Üyeler</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <MemberCard/>
        </div>
      </div>
    </div>
  );
};

export default MembersList;
