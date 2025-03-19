namespace PTesteClasses
{
    partial class Form1
    {
        /// <summary>
        /// Variável de designer necessária.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpar os recursos que estão sendo usados.
        /// </summary>
        /// <param name="disposing">true se for necessário descartar os recursos gerenciados; caso contrário, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código gerado pelo Windows Form Designer

        /// <summary>
        /// Método necessário para suporte ao Designer - não modifique 
        /// o conteúdo deste método com o editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.btn_mensalista = new System.Windows.Forms.Button();
            this.btn_horista = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // btn_mensalista
            // 
            this.btn_mensalista.AutoSize = true;
            this.btn_mensalista.Location = new System.Drawing.Point(268, 221);
            this.btn_mensalista.Name = "btn_mensalista";
            this.btn_mensalista.Size = new System.Drawing.Size(195, 93);
            this.btn_mensalista.TabIndex = 0;
            this.btn_mensalista.Text = "Mensalista";
            this.btn_mensalista.UseVisualStyleBackColor = true;
            this.btn_mensalista.Click += new System.EventHandler(this.btn_mensalista_Click);
            // 
            // btn_horista
            // 
            this.btn_horista.AutoSize = true;
            this.btn_horista.Location = new System.Drawing.Point(644, 221);
            this.btn_horista.Name = "btn_horista";
            this.btn_horista.Size = new System.Drawing.Size(195, 93);
            this.btn_horista.TabIndex = 1;
            this.btn_horista.Text = "Horista";
            this.btn_horista.UseVisualStyleBackColor = true;
            this.btn_horista.Click += new System.EventHandler(this.btn_horista_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(9F, 20F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1154, 542);
            this.Controls.Add(this.btn_horista);
            this.Controls.Add(this.btn_mensalista);
            this.Name = "Form1";
            this.Text = "Form1";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button btn_mensalista;
        private System.Windows.Forms.Button btn_horista;
    }
}

