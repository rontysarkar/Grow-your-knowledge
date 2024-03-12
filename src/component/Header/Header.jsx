import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <header className='container mx-auto  py-6 flex justify-between items-center border-b-2'>
            <h1 className="text-3xl font-bold">Grow-Your-Knowledge</h1>
            <img src={profile} alt="" />
        </header>


    );
};

export default Header;