import React from "react";
import Layout from "../Components/Layout";
import styled from "styled-components";

const TagSection = styled.section`
    border: 1px solid red;
    > ul{
      display: flex;
      font-size: 14px;
      color: #484848;
      > li{
        background: #D9D9D9;
        border-radius: 18px;
        padding: 4px 18px;
      }
    }
`


function Money() {
    return (
        <Layout>
            <TagSection>
                <ul>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ul>
                <button>新增标签</button>
            </TagSection>
            <section>
                <label>
                    <span>备注</span>
                    <input type="text" placeholder="在这里添加备注"/>
                </label>
            </section>
            <section>
                <button>支出</button>
                <button>收入</button>
            </section>
            <section>
                <div className="output">100</div>
                <div className="pad">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>0</button>
                    <button>.</button>
                    <button>OK</button>
                </div>
            </section>
        </Layout>
    )

}

export default Money