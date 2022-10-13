export default 
`<div class="modal" id="{{id}}" show>
    <h3 class="modal__title">{{title}}</h3>
    <div class="modal-input__wrapper">
        <label class="modal-input__label {{classLabel}}" for="{{inputId}}">{{textLabel}}</label>
        <input class="modal-input {{classInput}}" id="{{inputId}}" type="{{inputType}}" required="{{required}}">
        <div class="modal-input__error">{{error}}</div>
    </div>
    {{#if buttonText}}
        <button class="modal__btn">{{buttonText}}</button>
    {{/if}}
    <a class="modal__link" href="{{href}}">{{textLink}}</a>
</div>`