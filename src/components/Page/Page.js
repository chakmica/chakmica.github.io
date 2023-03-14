import "./Page.css"
import PageContent from "./PageContent";

const Page = (props) => {
    const title = props.title;

    return (
        <div ref={props.section} className="page">
            <h2 className="page-title">{title}</h2>
            <PageContent>{props.children}</PageContent>
        </div>
    )
}

export default Page;