import styles from "./Form.module.css"

export default function Form() {
  return(
    <form className={styles.formContainer}>
      <div>
        
        <label>
          Nome 
          <input />
        </label>
        
        
        <label>
          Email 
          <input />
        </label>
        
      </div>
      <label>
        Deixe uma mensagem para gente! 
        <textarea></textarea>
      </label>

      <button>Enviar</button>
    </form>
  )
}