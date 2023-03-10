import { ProjectType } from '../../data/projects';
import Project from '../project/Project';
import './ProjectList.scss';

const ProjectList = ({ list }: { list: ProjectType[] }) => {
    return (
        <div className='project-list'>
            <div className="list">
                {
                    list.sort((a, b) => b.id - a.id).map(project => (
                        <Project key={project.id} item={project} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProjectList;