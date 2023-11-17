class Todo {
    public id: string;
    public text: string;
    public complete: boolean;
  
    constructor({ text, complete = false }: { text: string; complete?: boolean }) {
      this.id = this.uuidv4();
      this.text = text;
      this.complete = complete;
    }
  
    private uuidv4(): string {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      });
    } 
}
  
  export { Todo };
  