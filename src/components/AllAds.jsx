import ad from "../assets/ad.png";

function Ads() {
    return (
        <section className="mb-20 flex flex-col items-center">
            <h5 className="text-[10px] font-semibold tracking-widest">
                ADVERTISEMENT
            </h5>

            <img
                src={ad}
                alt="Advertisement"
                className="mt-2 h-[300px] object-contain"
            />
        </section>
    );
}

export default Ads;