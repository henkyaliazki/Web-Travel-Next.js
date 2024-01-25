import PackageCard from "containers/Home/SecondSection/Package/PackageCard";

const Package = () => {
    return (
        <>
            <h3 className="text-heading-3 text-white font-label font-bold pt-14 mb-1">
                Paket Liburan Populer
            </h3>
            <p className="text-heading-4 text-white mb-4">
                Paket terbaik untukmu
            </p>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4`}>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
              <PackageCard/>
            </div>
        </>
    )
}

export default Package