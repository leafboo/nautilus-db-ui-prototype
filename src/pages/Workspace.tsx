import WorkspaceCSS from "./Workspace.module.css"

export default function Workspace() {
  return (
    <>
      <div className={WorkspaceCSS['workspace-container']}>
        <div className={WorkspaceCSS['notebook-box']}>
          <div>Notebook</div>
          <button>Create new Notebook</button>
        </div>
        <div className={WorkspaceCSS['research-paper-box']}>
          <div>Research Papers</div>
          <button>Find new Research Paper</button>
        </div>
      </div>
    </>
  )
}