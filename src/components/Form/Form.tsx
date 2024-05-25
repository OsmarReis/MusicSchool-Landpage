import styles from "./Form.module.css"

export default function Form() {
  return(
    <form className={styles.formContainer}>
      <div>
        
        <label htmlFor="name">
          Nome 
          <input id="name" type="text" autoComplete="name"/>
        </label>
        
        
        <label htmlFor="email">
          Email 
          <input id="email" type="email" autoComplete="off"/>
        </label>
        
      </div>

      <label htmlFor="message">
        Deixe uma mensagem para gente! 
        <textarea id="message" rows={20}></textarea>
      </label>

      <button>Enviar</button>
    </form>
  )
}