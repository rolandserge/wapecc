import CountUp from 'react-countup';

export default function Statistic() {

    return (
        <section className='section-statistique'>
            <div className="card-stat"></div>
            <div className='stat'>
                <div>
                    <CountUp
                        start={1}
                        end={1000}
                        duration={4}
                        separator=" "
                        suffix="+"
                        enableScrollSpy="true"
                    >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <p>Number of Delegates</p>
                </div>
                <div>
                    <CountUp
                        start={1}
                        end={100}
                        duration={4}
                        separator=" "
                        suffix="+"
                        enableScrollSpy="true"
                    >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <p>Number of Speakers</p>
                </div>
                <div>
                    <CountUp
                        start={1}
                        end={25}
                        duration={4}
                        separator=" "
                        suffix="+"
                        enableScrollSpy="true"
                    >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <p>Number of Exhibitors</p>
                </div>
            </div>
        </section>
    )
}
