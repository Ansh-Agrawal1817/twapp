import Card2 from "../components/Card2";

export default function Choose() {
    return (
        <div className="px-10 py-5 flex flex-row space-x-9">
            <Card2 url={"https://mui.com/material-ui/getting-started/templates/landing-page/"}/>
            <Card2 url={"https://tw-elements.com/docs/standard/components/cards/"}/>
            <Card2 />
            <Card2 />
        </div>
    );
}
