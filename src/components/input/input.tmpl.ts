export default 
`<div class="field">
  <input class="field__input" type="{{type}}" name="{{name}}">
  <label class="field__label">{{label}}</label>  
  <span class="field__error">{{#if error}}{{error}}{{/if}}</span>  
</div>`