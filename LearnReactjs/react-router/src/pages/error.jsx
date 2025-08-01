import { useRouteError, Link } from "react-router-dom";
import React from 'react';
import { Button, Result } from 'antd';
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page">

            <Result
                status="403"
                title="Oops!"
                subTitle={error.statusText || error.message}
                extra={<Button type="primary">
                    <Link to="/">
                        <span>Back to HomePage</span>
                    </Link>
                </Button>}
            />
        </div>
    );
}
