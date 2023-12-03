import webview

class Api:
    def __init__(self):
        self.cancel_heavy_stuff_flag = False
        
    def cerrar_ventana(self):
        webview.windows[0].destroy()
        print("ventana cerrada")
    
    def min_ventana(self):
        print("ventana minimisada")
        webview.windows[0].minimize()
        
    def max_ventana(self):
        print("ventana maximizada")
        webview.windows[0].toggle_fullscreen()
        



if __name__ == '__main__':
    api = Api()
    webview.create_window("YouTube Video", "index.html",js_api=api, width=700,height=425, frameless= True)#, js_api=webview.Api(console_message))# width=800, height=600)
    webview.start(debug=True)
