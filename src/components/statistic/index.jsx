import CountUp from 'react-countup';

export default function Statistic() {

    return (
        <section className='section-statistique'>
            <div className="card-stat"></div>
            <div className='stat'>
                <div>
                    <CountUp
                        start={1}
                        end={500}
                        duraion={4}
                        separator=" "
                        suffix="+"
                        enableScrollSpy="true"
                    >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <p>Delegates</p>
                </div>
                <div>
                    <CountUp
                        start={1}
                        end={150}
                        duration={4}
                        separator=" "
                        suffix="+"
                        enableScrollSpy="true"
                    >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <p>Companies</p>
                </div>
                <div>
                    <CountUp
                        start={1}
                        end={40}
                        duration={4}
                        separator=" "
                        suffix="+"
                        enableScrollSpy="true"
                    >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <p>Exhibitors</p>
                </div>
                <div>
                    <CountUp
                        start={1}
                        end={30}
                        duration={4}
                        separator=" "
                        suffix="+"
                        enableScrollSpy="true"
                    >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <p>Countries</p>
                </div>
                <div>
                    <CountUp
                        start={1}
                        end={15}
                        duration={4}
                        separator=" "
                        suffix="+"
                        enableScrollSpy="true"
                    >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                    </CountUp>
                    <p>Governments officials</p>
                </div>
            </div>
        </section>
    )
}
