// Work component
import WorkItem from './WorkItem';
import {work} from '../data';

const Work: React.FC = () => {
    return (
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 pt-12 py-16">
            <h2 className="h2">Work</h2>
            {work.map((item, idx) => (
                // plugging in the component WorkItem
                <WorkItem
                    key={idx}
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>
    );
};

export default Work;
