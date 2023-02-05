import { projects, ProjectType } from '../../data/projects';
import './Project.scss';

const Project = ({ item }: { item: ProjectType }) => {
    return (
        <div className='project'>
            <img className='project-image' src={item.image} alt="" />
            <div className="project-details">
                <div className='project-title'>
                    <h3>{item.name}</h3>
                    <span className='project-type'> {item.type}</span>
                </div>
                <div className="packages">
                    {
                        item.packages.map((pack, index) => (
                            <span key={index}>#{pack.name}</span>
                        ))
                    }
                </div>
                <div className="button-group">
                    <a href={item.preview} target="_blank" rel='noopener' className='btn btn-black'>Preview</a>
                    <a href={item.source} target="_blank" rel='noopener' className='btn btn-white'>Source</a>
                </div>
            </div>

        </div>
    )
}

export default Project;