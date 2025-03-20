import WorkspaceListRowCSS from "./WorkspaceListRow.module.css"
import { Link } from "react-router"

type WorkspaceListRowProps = {
  workspace: number;
  type: string;
}

export default function WorkspaceListRow(props: WorkspaceListRowProps) {
  return ( 
    <>
      <Link to="/userHome/workspace" style={{ textDecoration: 'none' }} >
        <div className={WorkspaceListRowCSS['workspace-row']}>
          <span> Workspace {props.workspace} </span>
          <div>
            Type: {props.type}
          </div>
        </div>
        
      </Link>
    </>
  )
}