// import Oformel from "../oformel"
// import { Oftoraziya } from ".."
import ProfileOrderHistory from "./components/ProfileOrderHistory"
import ProfileSidebar from "./components/ProfileSidebar"

function Profile() {
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6">
            <div className="container  max-w-[1600px] mx-auto">

                <main className="w-full ">
                    <div className="mb-7.5">
                        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">Личный кабинет</h1>
                    </div>
                    <div className="flex w-full items-start gap-5">
                        <ProfileSidebar />
                        <ProfileOrderHistory />
                        {/* <Oftoraziya /> */}
                        {/* <Oformel /> */}
                    </div>
                </main>
            </div>

        </div>

    )
}

export default Profile
