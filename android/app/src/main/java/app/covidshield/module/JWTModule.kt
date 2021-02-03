package app.covidshield.module

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlin.coroutines.CoroutineContext

class JWTModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context), CoroutineScope {

    override fun getName(): String = "JWTModule"

    override val coroutineContext: CoroutineContext = Dispatchers.IO

}