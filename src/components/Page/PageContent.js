import "./PageContent.css"

const PageContent = (props) => {

    const content = props.children;

    return (
        <div className="page-content">
            {content}
        </div>
    )
}

export default PageContent;