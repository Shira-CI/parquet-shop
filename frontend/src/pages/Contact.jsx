const Contact = () => {

    return (
        <div className="contact-page-container">
            <h2>צרו קשר</h2>
            <section className="contact-page">
                <div className="contact-form">
                    <form>
                        <label>
                            <span>
                                Your Name
                            </span>
                            <input
                                required
                                type="text"
                                name="name"
                            // value={form.name}
                            // onChange={handleChange}
                            // placeholder="Fullname goes here"

                            />
                        </label>

                        <label>
                            <span >
                                Your Email
                            </span>
                            <input
                                required
                                type="email"
                                name="email"
                            // value={form.email}
                            // onChange={handleChange}
                            // placeholder="Promise not to spam"
                            />
                        </label>

                        <label>
                            <span >
                                Your Message
                            </span>
                            <textarea
                                required
                                rows="7"
                                name="message"
                            // value={form.message}
                            // onChange={handleChange}
                            // placeholder="What's on your mind?"
                            />
                        </label>
                        <button className="send-msg-btn" type="submit">
                            send
                        </button>
                    </form>
                </div>

                <div className="directions">
                    <div className="map-container">
                        map
                    </div>

                    <div className="adress">
                        <h3>
                       בואו לבקר
                        </h3>
                        <p>
                            רחוב, עיר, טלפון
                        </p>
                    </div>

                    <div className="opening-hours">
                        <h3>
                            שעות פתיחה
                        </h3>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact