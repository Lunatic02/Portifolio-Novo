import styled from "styled-components";

export const ContactContainer = styled.main`
  display: flex;
  background-color: #24292e;
  height: calc(100vh - 6.3rem);
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  position: relative;
  padding: 2rem;
  h2{
    color: #eee;
    font-family: 'JetBrains Mono', monospace;
  }
  h2.contact-title{
    margin-bottom: 2rem;
  }
  h3{
    padding: 2rem;
    line-height: 3rem;
    font-size: 1.5rem;
    font-weight: 100;
    color: #eee;
    font-family: 'JetBrains Mono', monospace;
    width: 75%;
  }
  h3 span{
    color: #f9826c;
  }
  h3 a{
    color: #f9826c;
    text-decoration: none;
  }
  h3 a:hover{
    border-bottom: 2px solid #f9826c;
  }
  
  ol li{
    list-style: none;
    margin-left: -1rem;
  }
  ol li::before{
    content: counter(list-item);
    margin-right: 3rem;
    color: grey;
  }
  ol li:first-child::before{
    margin-right: 1rem;
  }
  ol li:last-child::before{
    margin-right: 1rem;
  }

  .socials{
    width: 50%;
    height: fit-content;
    border-right: 2px solid #f9826c;
  }
  .contact{
    height: fit-content;
  }
  .form label{
    display: block;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.8rem;
    color: #efefef;
  }
  .flex {
    display: flex;
    gap: 1rem;
  }
  .form input,
  .form textarea {
    font-family: 'JetBrains Mono';
    margin-bottom: 1.5rem;
    background: #1f2428;
    color:#efefef;
    border: none;
    font-size: 1rem;
    padding: 0.75rem;
    width: 100%;
    resize: none;
  }
  .form input:focus,
  .form textarea:focus {
    outline: 1px solid #f9826c;
  }

  .form button {
    background: #f9826c;
    color: #24292e;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: bold;
    text-transform: uppercase;
  }

`