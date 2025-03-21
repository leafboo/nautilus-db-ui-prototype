import ResearchPaperCardCSS from "./ResearchPaperCard.module.css"

type ResearchPaperCardProps = {
  title: string;
  abstract: string;
  authors: string;
  doi: string;
  datePublished: string;
  keywords: string;
  linkToSource: string;
}


export default function ResearchPaperCard(props: ResearchPaperCardProps) {

  return ( 
    <>
       <div className={ResearchPaperCardCSS['research-paper-card-container']}>
        <div>Title: {props.title}</div>
        <div>Abstract: {props.abstract}</div>
        <div>Authors: {props.authors}</div>
        <div>doi: {props.doi}</div>
        <div>Date Published: {props.datePublished}</div>
        <div>Keywords: {props.keywords}</div>
        <div>Link to Source: {props.linkToSource}</div><br />

        <button>Save This Paper</button>
      </div>
    </>
  )
}