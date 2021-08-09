/* eslint-disable no-unused-vars */
import React from "react";
import MarkdownRenderer from "react-markdown-renderer";

export default class AboutPreview extends React.Component {
  render() {
    const {entry} = this.props;

    return <div className="gradient purple vh-100">
      <div className="bg-texture shadow">
        <main className="wrapper">
          <div className="grid-col-2 about">
            <section className="info-text">
              <time>{entry.getIn(["data", "date"])}</time>
              <h1>{entry.getIn(["data", "title"])}</h1>
              <MarkdownRenderer markdown={entry.getIn(["data", "text"])} />

              <div className="socials">
                <a>
                  <img className="fb" src="/about/fb.svg" alt="Facebook logo"/>
                </a>
                <a>
                  <img className="ig" src="/about/ig.svg" alt="Instagram logo"/>
                </a>
              </div>
            </section>
            <section className="contact">
              <h2 className="">{entry.getIn(["data", "contact", "title"])}</h2>

              <form className="contact">
                <fieldset className="name">
                  <input type="text" id="name" name="name" placeholder={entry.getIn(["data", "contact", "name"])}/>
                  <label for="name">{entry.getIn(["data", "contact", "name"])}</label>
                  <img src="/img/icons/name.svg" alt=""/>
                </fieldset>

                <fieldset className="email">
                  <input type="email" id="email" name="email" placeholder={entry.getIn(["data", "contact", "email"])}/>
                  <label for="email">{entry.getIn(["data", "contact", "email"])}</label>
                  <img src="/img/icons/email.svg" alt=""/>
                </fieldset>

                <fieldset className="message">
                  <textarea id="message" name="message" placeholder={entry.getIn(["data", "contact", "message"])} rows="8" cols="80" class=""></textarea>
                  <label for="message">{entry.getIn(["data", "contact", "message"])}</label>
                  <img src="/img/icons/message.svg" alt=""/>
                </fieldset>

                <button type="submit" className="button">{entry.getIn(["data", "contact", "submit"])}</button>
              </form>
            </section>
          </div>
        </main>
      </div>
    </div>;
  }
}
