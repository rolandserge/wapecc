
export default function NewSletter() {

    return (
        <section className="newsletter">
            <div className="card">
                <h3>Subscribe</h3>
                <p>Join our community to receive updates</p>
                <form action="">
                    <input type="text" required placeholder="Enter votre email" />
                    <button>Subscribe</button>
                </form>
            </div>
        </section>
    )
}
